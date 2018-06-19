package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rating {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private Integer value;
	private String description;
	
	public Rating(Integer value) {
		this.value = value;
	}
	
	public Rating() {}

	public Integer getValue() {
		return value;
	}

	public String getDescription() {
		return description;
	}
	
}
