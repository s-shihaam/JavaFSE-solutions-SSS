-- Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.
-- o	Question: Write a stored procedure UpdateEmployeeBonus that updates the salary of employees 
-- in a given department by adding a bonus percentage passed as a parameter.
SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(BONUS IN INTEGER,DEPT IN EMPLOYEES.DEPARTMENT%TYPE) IS
BEGIN
    UPDATE EMPLOYEES
    SET SALARY= SALARY+(SALARY*BONUS)
    WHERE UPPER(DEPARTMENT) = DEPT;
END;

DECLARE
    BONUS_PERCENTAGE INTEGER;
    DEPT VARCHAR2(30);
BEGIN
    DBMS_OUTPUT.PUT_LINE('ENTER THE DEPARTMENT NAME : ');
    DEPT := &EMP_DEPT;
    DBMS_OUTPUT.PUT_LINE('ENTER THE BONUS PERCENTAGE FOR '||DEPT||' DEPARTMENT: ');
    BONUS_PERCENTAGE:= &EMP_BONUS;
    UpdateEmployeeBonus(BONUS_PERCENTAGE,DEPT);
END;
/

SELECT * FROM EMPLOYEES;
