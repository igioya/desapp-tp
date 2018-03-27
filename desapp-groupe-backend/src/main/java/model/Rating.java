package model;

public class Rating {
	
	private Integer value;

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
	
}
