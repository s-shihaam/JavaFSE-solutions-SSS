-- Scenario 2: A customer can be promoted to VIP status based on their balance.
--      o Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP 
--        to TRUE for those with a balance over $10,000.
BEGIN
    FOR REC IN (SELECT CUSTOMERID,BALANCE,ISVIP FROM CUSTOMERS WHERE BALANCE IS NOT NULL) LOOP
        IF REC.BALANCE > 10000 THEN
            UPDATE CUSTOMERS
            SET ISVIP = TRUE
            WHERE CUSTOMERS.CUSTOMERID=REC.CUSTOMERID;
        END IF;
    END LOOP;
END;
/

SELECT * FROM CUSTOMERS;
