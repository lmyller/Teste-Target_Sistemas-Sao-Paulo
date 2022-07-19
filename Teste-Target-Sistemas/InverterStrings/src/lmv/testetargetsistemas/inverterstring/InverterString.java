package lmv.testetargetsistemas.inverterstring;

import java.io.InputStream;
import java.util.Scanner;

public class InverterString {

	private static final String STRING = "String: ";
	
	public static void main(String[] args) {
		inverterString();
	}

	public static void inverterString() {
		Scanner scanner = criarScanner(System.in);
		StringBuilder stringBuilder; 
		char auxiliar;
		
		System.out.println(STRING);
		stringBuilder = new StringBuilder(lerString(scanner));
		
		System.out.println();
		
		for(int indice = 0; indice < stringBuilder.length() / 2; indice++) {
			auxiliar = stringBuilder.charAt(indice);
			
			stringBuilder.setCharAt(indice, stringBuilder.charAt((stringBuilder.length() - 1) - indice));
			stringBuilder.setCharAt((stringBuilder.length() - 1) - indice , auxiliar);
		}
		
		System.out.println(stringBuilder.toString());
	}

	private static String lerString(Scanner scanner) {
		return scanner.next();
	}

	private static Scanner criarScanner(InputStream inputStream) {
		return new Scanner(inputStream);
	}
}
