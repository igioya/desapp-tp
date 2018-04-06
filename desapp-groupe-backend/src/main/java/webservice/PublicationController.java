package webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Publication;

@CrossOrigin
@RestController
public class PublicationController {

	//@Autowired
	//PostService postService;

	
	@RequestMapping(value = "/publications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Publication>> getAll() {
		List<Post> posts = this.postService.getAll();
		if (posts.isEmpty() || posts == null) {
			return new ResponseEntity<List<Post>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
	}

}
