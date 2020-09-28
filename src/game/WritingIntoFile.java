package game;

import com.google.gson.Gson;

import java.io.*;

public class WritingIntoFile {

/*
    // serialisation
    String authorJson = gson.toJson(author);
    //System.out.println("Json: " + authorJson);
*/

    private static final String FILENAME = "WebContent/data.json";

    public static void main(String[] args) {
        FileWriter();
    }

        public static String FileWriter(){
            String content="";


        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILENAME, true))) {
            content = DataRetriever.FileReader();

            bw.write(content+"\n");


            // no need to close it.
            bw.close();


            System.out.println("Done");

        } catch (IOException e) {

            e.printStackTrace();

        }
        return content;
    }}
// player score, coordinates,





 /*PrintStream out = null;
        try {
            out = new PrintStream((new FileOutputStream("output.txt")));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }*/
//System.setOut(out);

// updating should be done in java
//cookie (sends data)-> java script -> java -> (i use jsp for that) -> json data (i store it in json)
// if (5 players)