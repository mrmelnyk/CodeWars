//Implement a function that converts the potentially harmful characters so hackers cannot compromise your website through XSS (Cross Site Scripting) 
//which injects script tags into the website through the use of form fields. The special characters are:
    //< --> &lt;
    //> --> &gt;
    //" --> &quot;
    //& --> &amp;

    function htmlspecialchars(formData) {
        return formData.replace(/[&]/ig, '&amp;').replace(/[<]/ig, '&lt;').replace(/[>]/ig, '&gt;').replace(/["]/ig, '&quot;');
      }

      console.log(htmlspecialchars('You & I would do well together.'))//should log 'You &amp; I would do well together.'
      