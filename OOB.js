/*
 * A space goes after "if"
 */

var traveler_count = 1; 
//For add/remove traveler functions 
var leg_count = 1; 
//For keeping track of legs and leg information

function elevated_risk()
{
	//Pre: Elevated risk section hidden, corresponding dropdown menu showing empty value
	//Post: Elevated risk section showing 

	var ers_check = document.getElementById("elevated_risk_check");
	var ers_text = document.getElementById("elevated_risk_situation");  

	if (ers_check.checked)
	{
		ers_text.style.display = "block"; 
	}
	else
	{
		ers_text.style.display = "none"; 
	}
}//function elevated_risk

function transportation_choice()
{
	//Pre: Transportation type fields are hidden, corresponding dropdown menu showing empty value 
	//Post: Transportation type fields are showing according to value of corresponding dropdown menus 

	var mode = document.getElementById("mode_of_travel"); 
	var plane_mode = document.getElementById("plane_mode_of_travel");
	var vehicle_mode = document.getElementById("vehicle_mode_of_travel"); 
	var train_mode = document.getElementById("train_mode_of_travel");
	var other_mode = document.getElementById("other_mode_of_travel"); 


	if (mode.value == "Plane")
	{
		
		plane_mode.style.display = "block";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Vehicle")
	{
		//overall options 
		vehicle_mode.style.display = "block";
		plane_mode.style.display = "none";
		train_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Train")
	{
		train_mode.style.display = "block";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Other")
	{
		other_mode.style.display = "block";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
	}
	else
	{
		other_mode.style.display = "none";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
	}
}//function transportation_choice

function vehicle_type_choice()
{
	//Pre: Mode_of_travel = vehicle, all fields hidden besides corresponding dropdown menus 
	//Post: Information fields showing based on corresponding dropdown menus 

	//car options 
	var vehicle_type = document.getElementById("type_of_vehicle"); 
	var public_vehicle = document.getElementById("vehicle_type_public");
	var private_vehicle = document.getElementById("vehicle_type_private");
	var rental_vehicle = document.getElementById("vehicle_type_rental"); 

	if (vehicle_type.value == "Rental")
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "block";
	}
	else if (vehicle_type.value == "Private")
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "block"; 
		rental_vehicle.style.display = "none";
	}
	else if (vehicle_type.value == "Public")
	{
		public_vehicle.style.display = "block";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "none";
	}
	else
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "none";
	}
}//function vehicle_type_choice

function plane_type_choice()
{
	//Pre: mode_of_travel = plane, all fields hidden besides corresponding dropdown menus 
	//Post: Information fields showing based on corresponding dropdown menus 

	var plane_type = document.getElementById("type_of_plane"); 
	var commercial_plane = document.getElementById("plane_type_commercial");
	var private_plane = document.getElementById("plane_type_private"); 

	if (plane_type.value == "Commercial")
	{
		commercial_plane.style.display = "block"; 
		private_plane.style.display = "none"; 
	}
	else if (plane_type.value == "Private")
	{
		commercial_plane.style.display = "none"; 
		private_plane.style.display = "block"; 
	}
	else
	{
		commercial_plane.style.display = "none"; 
		private_plane.style.display = "none"; 
	}
}//function plane_type_choice

function lodging_choice()
{
	//Pre: all corresponding input fields hidden except corresponding dropdown menus
	//Post: Lodging section visible for information entry post type selection 

	var lodging = document.getElementById("lodging_check");
	var lodging_show = document.getElementById("lodging_section");

	if (lodging.value == "Yes")
	{
		lodging_show.style.display = "block";
	}
	else
	{
		lodging_show.style.display = "none"; 
	}

}//function lodging_choice

function lodging_type()
{
	//Pre: lodging_check = yes, all input fields for this section hidden except corresponding dropdown menus
	//Post: Lodging input sections shown based on dropdown choice

	var stay = document.getElementById("type_of_lodging"); 
	var hotel = document.getElementById("lodging_type_hotel"); 
	var private_res =  document.getElementById("lodging_type_private_residence"); 
	var other_res = document.getElementById("lodging_type_other"); 

	if (stay.value == "Hotel")
	{
		hotel.style.display = "block"; 
		private_res.style.display = "none"; 
		other_res.style.display = "none"; 
	}
	else if (stay.value == "Private_residence")
	{
		hotel.style.display = "none"; 
		private_res.style.display = "block"; 
		other_res.style.display = "none"; 
	}
	else if (stay.value == "Other")
	{
		hotel.style.display = "none"; 
		private_res.style.display = "none"; 
		other_res.style.display = "block"; 
	}
	else
	{
		hotel.style.display = "none"; 
		private_res.style.display = "none"; 
		other_res.style.display = "none"; 
	}
}//function lodging_type

//Following code is Object Oriented JavaScript to keep track of information from the form, and help compile JSON later on 

		var traveler_array = new Array(); 
		//For keeping track of travelers on the trip 
		var transportation_array = new Array(); 
		//For keeping track of transportation, with index +1 being the leg of the trip
		var lodging_array = new Array(); 
		//For keeping track of lodging, with index +1 being the leg of the trip 

		var first_name = " "; 
		var last_name = " "; 
		var number = " "; 
		var trip_purpose = " "; 
		var filer_sts = " "; 
		var group_sts = " "; 
		var loc_cont_fname = " "; 
		var loc_cont_lname = " "; 
		var loc_cont_num = " "; 
		var ert_fname = " "; 
		var ert_lname = " "; 
		var ert_num = " "; 
		var ert_form_cont = " "; 


		function Traveler(f, l, num)
		{
			//Needs to be added to add_traveler() method 
			first_name = f; 
			last_name = l; 
			number = num; 
		}

		function Trip_Purpose_Info(p, g, fi)
		{
			trip_purpose = p; 
			filer_sts = fi; 
			group_sts = g; 
		}

		function Location_Contact_Info(fir, las, phon, boo)
		{
			loc_cont_num = phon; 
			loc_cont_fname = fir; 
			loc_cont_lname = las; 

			if (boo)
			{
				Elevated_Risk_Situation(document.getElementById(ers_trip_member_first_name), document.getElementById(ers_trip_member_last_name), document.getElementById(ers_trip_member_contact_number), document.getElementById(ers_contact_type.value)); 
			}
		}

		function Elevated_Risk_Situation(fn, ln, numb, form)
		{
			ert_fname = fn; 
			ert_lname = ln; 
			ert_num = numb; 
			ert_form_cont = form; 
		}

		function Gather_Traveler_Info()
		{
			var traveler = new Traveler(document.getElementById(trip_member_first_name), document.getElementById(trip_member_last_name), document.getElementById(trip_member_contact_number)); 

			traveler_array.push(traveler); 
		}//function to add initial traveler to traveler array

		function Gather_Purpose_Info()
		{
			var trip_details = new Trip_Purpose_Info(document.getElementById(purpose_of_trip), document.getElementById(filer_sts), document.getElementById(group_sts)); 
		}//function to gather purpose information 

		function Gather_Location_Info()
		{
			var location_cont; 

			if (document.getElementById(elevated_risk_check).checked)
			{
				location_cont = new Location_Contact_Info(document.getElementById(location_contact_first_name), document.getElementById(location_contact_last_name), document.getElementById(location_contact_number), true); 
			}
			else
			{
				location_cont = new Location_Contact_Info(document.getElementById(location_contact_first_name), document.getElementById(location_contact_last_name), document.getElementById(location_contact_number), false); 
			}

		}//function to gather location contact information and ERS situation 
