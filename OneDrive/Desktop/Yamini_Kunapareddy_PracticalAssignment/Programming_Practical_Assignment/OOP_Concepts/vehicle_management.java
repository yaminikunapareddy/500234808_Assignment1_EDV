package oop_concepts;

public class vehicle_management {
	

		public static void main(String[] args) {
			// Creating instances using different constructors
			
			Car car1 = new Car("BMW", 2015, "Petrol", 3);
			Motorcycle motorcycle1 = new Motorcycle("Harley-Davidson", 2023, "Gasoline", true);


			System.out.println("Car  - Model: " + car1.getModel() + ", Year: " + car1.getYear() + ", Fuel Type: "
					+ car1.getFuelType() + ", Number of Doors: " + car1.getNumberOfDoors());
			System.out.println("Motorcycle  - Model: " + motorcycle1.getModel() + ", Year: " + motorcycle1.getYear()
					+ ", Fuel Type: " + motorcycle1.getFuelType() + ", Helmet Required: " + motorcycle1.isHelmetRequired());
		}
	}

	 class Car extends Vehicle {
	    private int numberOfDoors;

	    public Car(String model, int year, String fuelType, int numberOfDoors) {
	        super(model, year, fuelType);
	        this.numberOfDoors = numberOfDoors;
	    }

	    public int getNumberOfDoors() {
	        return numberOfDoors;
	    }
	}

	///Vehicle class
	 class Vehicle {
		 private String model;
		 private int year;
		 private String fuelType;

		 public Vehicle(String model, int year, String fuelType) {
		     this.model = model;
		     this.year = year;
		     this.fuelType = fuelType;
		 }

		 public void start() {
		     System.out.println("Vehicle started.");
		 }

		 public void stop() {
		     System.out.println("Vehicle stopped.");
		 }

		 public String getModel() {
		     return model;
		 }

		 public int getYear() {
		     return year;
		 }

		 public String getFuelType() {
		     return fuelType;
		 }
		}

	 class Motorcycle extends Vehicle {
	    private boolean helmetRequired;

	    public Motorcycle(String model, int year, String fuelType, boolean helmetRequired) {
	        super(model, year, fuelType);
	        this.helmetRequired = helmetRequired;
	    }

	    public boolean isHelmetRequired() {
	        return helmetRequired;
	    }
	}