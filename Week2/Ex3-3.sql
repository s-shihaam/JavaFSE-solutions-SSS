-- Scenario 3: Customers should be able to transfer funds between their accounts.
-- o Question: Write a stored procedure TransferFunds that transfers a specified amount from one account
--  to another, checking that the source account has sufficient balance before making the transfer.
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id   IN NUMBER,
    p_amount          IN NUMBER
)
IS
    v_from_balance NUMBER;
BEGIN
    -- Lock the source account to prevent concurrent modification
    SELECT balance INTO v_from_balance
    FROM Accounts
    WHERE AccountID = p_from_account_id
    FOR UPDATE;

    -- chcecking sufficient funds
    IF v_from_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;

    -- Deducting from srce account
    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account_id;

    -- updating destination account
    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account_id;

    --Insert transaction record from source
    INSERT INTO Transactions (
        TransactionID, AccountID, TransactionDate, Amount, TransactionType
    ) VALUES (
        Transactions_seq.NEXTVAL,         -- assuming you have a sequence
        p_from_account_id,
        SYSDATE,
        p_amount,
        'Debit'
    );
    -- to destinantion record
    INSERT INTO Transactions (
        TransactionID, AccountID, TransactionDate, Amount, TransactionType
    ) VALUES (
        Transactions_seq.NEXTVAL,
        p_to_account_id,
        SYSDATE,
        p_amount,
        'Credit'
    );

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END TransferFunds;
/

CREATE SEQUENCE Transactions_seq START WITH 3 INCREMENT BY 1;

--Transfer 200 from Account 1 to Account 2:
BEGIN
    TransferFunds(1, 2, 200);
END;
/
select * from transactions;

select * from accounts;
