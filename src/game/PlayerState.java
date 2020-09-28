package game;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

public class PlayerState {
    Gson gson = new Gson();
    String username;
    List<String> coordinates = new ArrayList<>();
    boolean doublee;
    boolean replacement;
    boolean freedom ;
    int score ;

    public PlayerState(){

    }
}
