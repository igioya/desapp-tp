package model.states.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public abstract class UserState {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int id;
	
	public int getId(){return this.id;}
}
