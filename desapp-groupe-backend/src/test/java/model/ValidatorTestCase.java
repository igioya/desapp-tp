package model;

import static org.junit.Assert.*;

import org.junit.Test;

public class ValidatorTestCase {
	
	Validator validator = new Validator();

//	@Test
//	public void checkIfACuilIsValid() {
//		String cuil = "20379541217";
//		assertTrue(validator.isValidEmailAddress(cuil));
//	}
	
	@Test
	public void checkIfACuilIsInvalid() {
		String cuil = "11111111111";
		assertFalse(validator.isValidEmailAddress(cuil));
	}
	
	@Test
	public void checkIfAnEmailIsValid() {
		String mail = "pepe@gmail.com";
		assertTrue(validator.isValidEmailAddress(mail));
	}
	
	@Test
	public void checkIfAnEmailIsInvalid() {
		String mail = "pepe.com";
		assertFalse(validator.isValidEmailAddress(mail));
	}
	
//	@Test
//	public void checkIfATelephoneIsValid() {
//		String telephone = "011-4-224-9785";
//		assertTrue(validator.isValidTelephone(telephone));
//	}
	
	@Test
	public void checkIfATelephoneIsInvalid() {
		String telephone = "485";
		assertFalse(validator.isValidTelephone(telephone));
	}
	
	

}
