function MainController($scope){
  // for add a multiple projects
    $scope.projectDataObjArray = [];
      $scope.incProjectObj = function(){
      var projectDataObj = {}
        projectDataObj['projectName'] = '';
        projectDataObj['description'] = '';
        projectDataObj['projectDomain'] = '';
        projectDataObj['skillsUsedProject'] = '';
        $scope.projectDataObjArray.push(projectDataObj);
      }

    // for add a multiple experience obj
      $scope.experDataObjArray = [];
      $scope.incExperiencedObj = function(){
      var experienceObjs = {}
        experienceObjs['experience'] = '';
        experienceObjs['pastCompanyDetails'] = '';
        experienceObjs['role'] = '';
        experienceObjs['designation'] = '';
        $scope.experDataObjArray.push(experienceObjs);
      }
      $scope.incProjectObj();
      $scope.incExperiencedObj();

      // for remove a project obj
      $scope.decProjectObj = function(dataObj){
        if ($scope.projectDataObjArray.length>1) {
          var projObjs = $scope.projectDataObjArray.indexOf(dataObj);
          $scope.projectDataObjArray.splice(projObjs, 1);
        }
      }

      // for remove a experience obj
      $scope.decExperiencedObj = function(dataObj){
        if ($scope.experDataObjArray.length>1){
          var expObjs = $scope.experDataObjArray.indexOf(dataObj);
          $scope.experDataObjArray.splice(expObjs, 1);
        }
      }

    // for download resume in pdf
      $scope.data = '';
      $scope.downloadResume = function(data){
        data['expData'] = $scope.experDataObjArray
        data['projectData'] = $scope.projectDataObjArray
        $scope.data = data;
          html2canvas(document.getElementById('exportthis'),{
            onrendered: function (canvas) {
              var data = canvas.toDataURL();
              var docDefinition = {
                  content: [{
                      image: data,
                      width: 500,
                  }]
              };
              pdfMake.createPdf(docDefinition).download($scope.data.userName+".pdf");
              angular.element('.pdf_dnl').addClass('hide')
            }
          });
       }
}

angular
	.module('testApp')
	.controller('MainController',MainController)