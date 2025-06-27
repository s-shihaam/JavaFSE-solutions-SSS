-- Exercise 3: Stored Procedures

-- Scenario 1: The bank needs to process monthly interest for all savings accounts.
-- o	Question: Write a stored procedure ProcessMonthlyInterest that calculates and updates
-- the balance of all savings accounts by applying an interest rate of 1% to the current balance.
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE ACCOUNTS
    SET BALANCE = BALANCE+(BALANCE*0.01)
    WHERE UPPER(ACCOUNTTYPE)='SAVINGS';
END;


BEGIN 
    PROCESSMONTHLYINTEREST;
END;
/

SELECT * FROM ACCOUNTS;
