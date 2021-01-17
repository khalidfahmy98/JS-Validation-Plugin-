#Description 

Jquery plugin that validate inputs - dropdowns based on developer requirements and choices with several options to output the error message and using as primary validation before saving actions or either any critical 

--------------------------------------------------------------------------------

#How To Use
  -Implementation 
    Add validations.js , validation.css  , toaster.js to your project 
    paste the following html code for toaster options into your shared layout or either any 
    
    <section class="app-toasters-wrapper hide"></section>
    
  - Usage 
    invoke function as the following while doing your critical action 
      var isValid = Validation('ValidateThis', 'linedText');
      if (isValid) {
        // do your save action or call 
        setToaster("success", "Saved successfully"); //toaster method we provided inside our validation plugin 
    }
    
    // ValidateThis class represets the group of inputs that you want to validate 
    // linedText represent one of the current options you can choose from the output your error message , choose on of the following ( toaster , linedText , linedDiv )
    
    // if you choosed linedDiv please create the div that will contain all error with ( hide ) class so we can handle it then provide this element id or class to the 
        plugin invoke as the following example 
        
        // creating alert div shared ( linedDiv) 
            <div id="ValidateLinedDiv" class="alert alert-danger hide"></div>
        // invoking the function based on linedDiv choice 
              var isValid = Validation('ValidateThis', 'linedDiv' , '#ValidateLinedDiv');

  
  But before that you must declare the following data values for each input neither select or dropdowns 
    - data-min    // the minimum length 
    - data-max    // the maximum length
    - data-name   // your input or dropdown name that will be showed for both devs and clients that using the enviroment 
    - data-type   // the case or type you want to validate of , you got the following options included in the current version ( password - username - email - select - text -                         number)
    
  # on Action Example 
          Html :
            <button class="butn butn-primary" onclick="save()">Click To Test Validation</button>
          JS : 
          function save() {
              var isValid = Validation('ValidateThis', 'linedText');
              if (isValid) {
                  // do your save action or call 
                  setToaster("success", "Saved successfully");
              }
          }

  # Html Example 
  
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-12 ">
                    <label>Full Name </label>
                    <input type="text" class="form-control input-sm ValidateThis" data-name="Name" data-min="6" data-max="16" data-type="text" />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 ">
                    <label>Username</label>
                    <input type="text" class="form-control input-sm ValidateThis" data-name="Username" data-min="6" data-max="16" data-type="username" />
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                    <label>Password</label>
                    <input type="password" class="form-control input-sm ValidateThis" data-name="Password" data-min="3" data-max="15" data-type="password" />
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                    <label>Email</label>
                    <input type="text" class="form-control input-sm ValidateThis" data-name="Email" data-min="6" data-max="25" data-type="email" />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 ">
                    <label>Gender</label>
                    <select class="form-control input-sm ValidateThis" data-name="Gender" data-type="select">
                        <option value="0" selected disabled>Select Gender</option>
                        <option value="1"> Male </option>
                        <option value="2"> Female </option>
                    </select>
                </div>
            </div>
         
--------------------------------------------------------------------------------

# Notice 
   Please while creating the html enviroment try to make it much similar as the example above showed ( div contatinin label and input or either what you want ) 
  
  
         
