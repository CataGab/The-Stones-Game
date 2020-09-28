package game;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;



import java.util.List;

@Path("/examples")
@Produces(MediaType.APPLICATION_JSON)

public class GameServer {

    static GameState GAME = new GameState();

	public GameServer() {
	}

	@GET
	@Path("/gamestate")
	public GameState gameState() {
		return GAME;
	}
	@GET
	@Path("/username/{username}")
	public GameState username(@PathParam("username") String username) {
	    PlayerState player = new PlayerState();
	    player.username = username;
	    GAME.playerStates.add(player);
		return null;
	}

	//i need to add a post that will update gamestate() prolly replace it.
	
	/*@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Path("/transfer")
	public String transferForm(@FormParam("customerId") String customerId, 
			@FormParam("fromAccount") int fromAccount, 
			@FormParam("toAccount") int toAccount, 
			@FormParam("amount") double amount) {
		return BANK.transfer(customerId, fromAccount, toAccount, amount);
	}
*/
}
