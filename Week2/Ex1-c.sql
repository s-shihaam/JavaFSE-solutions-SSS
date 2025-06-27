-- Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 
--             30 days.
--      o Question: Write a PL/SQL block that fetches all loans due in the next 30 days and prints
--                 a reminder message for each customer.
BEGIN
    FOR I IN (SELECT C.CUSTOMERID,C.NAME, L.ENDDATE FROM LOANS L
                JOIN CUSTOMERS C 
                ON C.CUSTOMERID=L.CUSTOMERID
                WHERE L.ENDDATE BETWEEN SYSDATE AND SYSDATE+30) LOOP
               
        DBMS_OUTPUT.PUT_LINE('REMAINDER: MR/MS '||I.NAME||', YOUR LOAN IS DUE ON '||
        TO_CHAR(I.ENDDATE,'DD-MM-YYYY')||'. PLEASE PAY IT ON TIME.');
        DBMS_OUTPUT.PUT_LINE('THANK YOU.');
    END LOOP;
END;
/

select * from loans;
