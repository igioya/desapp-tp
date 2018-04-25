package model.states.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@Entity
public abstract class UserState {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	protected int id;
}
