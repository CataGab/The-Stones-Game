package game;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import javax.json.Json;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class DataRetriever {
    private static final String FILENAME = "WebContent/data.json";

    public static void main(String[] args) {
        FileReader();
    }
    public static String FileReader(){
        String string = "";
        String replacedString= "";
//THIS CLASS should retrieve data from the data.json file, write all the text inside the file into a string and should be able to add the username taken from the cookie in the browser and update the username. then rewrite the data.json with the updated version of it.
            try {
                BufferedReader in = new BufferedReader(new FileReader(FILENAME));
                String line;

                while ((line = in.readLine()) != null) {
                    string = string + line;
                }
                //JsonParser parser = new JsonParser();
                //JsonElement element = parser.parse(string);
                //JsonObject object = element.getAsJsonObject();
                //System.out.println(object.get("playerInfo"));

                //String username = GameServer.GAME.playerStates.get(0).username;
                String username = "newUsername";
                replacedString = string.replace("Sam", username);
                System.out.println(replacedString);
                in.close();


            } catch (IOException e) {
                e.printStackTrace();

            }
            return replacedString;
        }
    }



/*
    String line;
            while((line = in.readLine()) != null)
            {   String jsonString = line;
                JsonParser parser = new JsonParser();
                JsonElement element = parser.parse(line);
                JsonObject object = element.getAsJsonObject();
                String name = object.get("name").getAsString();




                System.out.println(line);
            }
            in.close();
        } catch (IOException e) {
            e.printStackTrace();

        }
        }
        }
*/
