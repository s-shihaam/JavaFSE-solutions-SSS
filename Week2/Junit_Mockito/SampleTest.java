
// Exercise 2: Writing Basic JUnit Tests 

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SampleTest {

    int noOfDigits(String n){
        return String.valueOf(n).length();
    }
    @BeforeEach
    void sayHello(){
        System.out.println("HEllO...starting test");
    }
    @Test
    void testSum() {
        assertEquals(4, noOfDigits("1234"));
        assertEquals(3,noOfDigits("123"));
        assertEquals(2,noOfDigits("12"));
        assertEquals(1,noOfDigits("1"));
        assertEquals(0,noOfDigits(""));
    }
    @AfterEach
    void endtest(){
        System.out.println("Ending tests...");
    }
}
