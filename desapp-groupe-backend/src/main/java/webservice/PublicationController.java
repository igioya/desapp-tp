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

import model.Data;
import model.Publication;

@CrossOrigin
@RestController
public class PublicationController {

	//@Autowired
	Data data;
	
	@RequestMapping(value = "/publications", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Publication>> getAll() {
		List<Publication> publications = this.data.getPublications();
		if (publications.isEmpty() || publications == null) {
			return new ResponseEntity<List<Publication>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Publication>>(publications, HttpStatus.OK);
	}

}
