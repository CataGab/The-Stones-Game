package game;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TestClass {
    @Test         //is the class reading the file?
    public void TestFILEREADING (){
        String expectedString= "{\"playerInfo\":[  {\"playerID\": 1,    \"username\": \"newUsername\",    \"coordinates\": [\"b2.1\", \"b1.1\", \"b3.0\"],    \"replacement\": false,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 2,    \"username\": \"Mike Sanderson\",    \"coordinates\": [  \"b3.1\", \"b0.1\", \"b2.0\"],    \"replacement\": true,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 3,    \"username\": \"newUsernameuel Jackson\",    \"coordinates\": [],    \"replacement\": false,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 4,    \"username\": \"Cata Senpai\",    \"coordinates\": [ \"b3.4\", \"b3.3\", \"b3.1\"],    \"replacement\": true,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 5,    \"username\": \"Michael Jackson\",    \"coordinates\": [\"b4.2\", \"b2.4\", \"b1.4\"],    \"replacement\": false,    \"Double\": false,    \"freedom\": false,    \"score\": 3}]}";
        assertEquals(expectedString, DataRetriever.FileReader());
    }
    @Test
    public void TestFILEAPPENDING(){
        String expectedString =
                "{\"playerInfo\":[  {\"playerID\": 1,    \"username\": \"newUsername\",    \"coordinates\": [\"b2.1\", \"b1.1\", \"b3.0\"],    \"replacement\": false,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 2,    \"username\": \"Mike Sanderson\",    \"coordinates\": [  \"b3.1\", \"b0.1\", \"b2.0\"],    \"replacement\": true,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 3,    \"username\": \"newUsernameuel Jackson\",    \"coordinates\": [],    \"replacement\": false,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 4,    \"username\": \"Cata Senpai\",    \"coordinates\": [ \"b3.4\", \"b3.3\", \"b3.1\"],    \"replacement\": true,    \"Double\": false,    \"freedom\": false,    \"score\": 3},  {\"playerID\": 5,    \"username\": \"Michael Jackson\",    \"coordinates\": [\"b4.2\", \"b2.4\", \"b1.4\"],    \"replacement\": false,    \"Double\": false,    \"freedom\": false,    \"score\": 3}]}";
        assertEquals(expectedString, WritingIntoFile.FileWriter());
    }
}
