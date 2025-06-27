import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

class StrongPassowrd{
    public boolean check_is_strong(String s){
        int lower=0,upper=0,digit=0,special_char=0;
        for(char ch:s.toCharArray()){
            if(Character.isLowerCase(ch)){lower++;}
            else if(Character.isUpperCase(ch)){upper++;}
            else if(Character.isDigit(ch)){digit++;}
            else if(Character.isWhitespace(ch)){return false;}
            else{
                special_char++;
            }
        }
        if(lower>6 && upper>4 && digit>0 && special_char>0){return true;}
        return false;
    }
}
public class AAAPattern {
    @Test
    public void testPassowrd(){
        //Arrange
        StrongPassowrd sp = new StrongPassowrd();
        // Act
        boolean isStrong = sp.check_is_strong("MySECRETPassword#123");
        // Assert
        assert isStrong==true;

        isStrong = sp.check_is_strong("MyPassword#123");
        assert isStrong==false;
    }
    @BeforeEach
    public void printBefore(){
        System.out.println("Running Test");
    }
    @AfterEach
    public void printAfter(){
        System.out.println("Test Check Done");
    }
}
