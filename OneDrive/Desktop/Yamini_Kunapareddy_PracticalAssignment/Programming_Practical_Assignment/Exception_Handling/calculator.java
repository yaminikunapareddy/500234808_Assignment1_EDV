package exception_handling;

	 
		import java.io.BufferedReader;
		import java.io.FileReader;
		import java.io.IOException;
class Calculator {
		    public static void main(String[] args) {
		        BufferedReader reader = null;
		        try {
		            // Simulating interaction with a file
		            reader = new BufferedReader(new FileReader("C:\\Users\\8055y\\eclipse-workspace\\Programming_Practical_Assignment\\src\\exception_handling\\input.txt"));
		            double num1 = Double.parseDouble(reader.readLine());
		            double num2 = Double.parseDouble(reader.readLine());
		            char operation = reader.readLine().charAt(0);

		            double result = 0;
		            switch (operation) {
		                case '+':
		                    result = num1 + num2;
		                    break;
		                case '-':
		                    result = num1 - num2;
		                    break;
		                case '*':
		                    result = num1 * num2;
		                    break;
		                case '/':
		                    if (num2 == 0) {
		                        throw new ArithmeticException("Cannot divide by zero.");
		                    }
		                    result = num1 / num2;
		                    break;
		                default:
		                    throw new InvalidOperationException("Unsupported operation: " + operation);
		            }
		            System.out.println("The result is: " + result);
		        } catch (NumberFormatException e) {
		            System.out.println("Invalid input: Please enter numeric values.");
		        } catch (ArithmeticException e) {
		            System.out.println("Math error: " + e.getMessage());
		        } catch (InvalidOperationException e) {
		            System.out.println("Error: " + e.getMessage());
		        } catch (IOException e) {
		            System.out.println("File error: " + e.getMessage());
		        } finally {
		            // Ensure the file resource is closed
		            if (reader != null) {
		                try {
		                    reader.close();
		                } catch (IOException e) {
		                    System.out.println("Error closing the file: " + e.getMessage());
		                }
		            }
		            System.out.println("Resource cleanup done.");
		        }
		    }
		}
		 //Custom exception for invalid operations
		class InvalidOperationException extends Exception 
		{
		 public InvalidOperationException(String message) 
		 {
		     super(message);
		 }
		}


