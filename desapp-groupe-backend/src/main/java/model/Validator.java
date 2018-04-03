package model;

public class Validator {
	
	public Boolean isValidCuil(String cuil) {

		Boolean valid = false;
		int factor = 5;
		int[] c = new int[11];
		int resultado = 0;

		for (int i = 0; i < 10; i++) {
		c[i] = Integer.valueOf(Character.toString(cuil.charAt(i))).intValue();
		resultado = resultado + c[i] * factor;
		factor = (factor == 2)?7:factor - 1;
		}

		int control = (11 - (resultado % 11)) % 11;
		if (control == c[10]) {
			valid = true;}
		return valid;
		}
	
	public Boolean isValidEmailAddress(String email) {
        String ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(ePattern);
        java.util.regex.Matcher m = p.matcher(email);
        return m.matches();
 }
	
	public Boolean isValidTelephone(String telephone) {
	
	String tPattern = "/^((?:\\(?\\d{3}\\)?[- .]?\\d{4}|\\(?\\d{4}\\)?[- .]?\\d{3}|\\(?\\d{5}\\)?[- .]?\\d{2})[- .]?\\d{4})$/";
			java.util.regex.Pattern p = java.util.regex.Pattern.compile(tPattern);
    java.util.regex.Matcher m = p.matcher(telephone);
    return m.matches();
	}

}
