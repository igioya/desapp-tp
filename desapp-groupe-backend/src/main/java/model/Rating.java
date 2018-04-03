package model;

public class Rating {
	
	private Integer value;
	private String description;

	public Rating() {
		this.value = 0;
	}
	
	public Rating(Integer value) {
		this.value = value;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
