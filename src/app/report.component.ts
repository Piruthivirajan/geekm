import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Event}  from './Event';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [EventService]
})
export class ReportComponent {

registers:Event;
total:number=0;
sno:number=0;
junk:boolean=false;
 trix:boolean=false;
 face:boolean=false;
 adz:boolean=false;
 zorro:boolean=false;
 quiz:boolean=false;
 mesh:boolean=false;
 tango:boolean=false;
    constructor(public eventservice:EventService,private router: Router) {
      
    }
    ngOnInit() {
            this.getDetails();
    }
    getDetails(){
      this.eventservice.getDetails().subscribe(reg =>{
         this.registers=reg;
         var length=0;
         for(var i in this.registers)
         {
            this.total=length=length+1;
         }
       });
    }

 delete(value:any) {
 this.eventservice.removePart(value).subscribe(reg =>{      
       });
       this.getDetails();
       this.router.navigateByUrl('/report');
 }
 export(){
   var title="Geek";
    var head = "";
         head += '"S.No",';
         head += '"Event Name",';
         head += '"Collge Name",';
         head += '"Participator 1",';
         head += '"Contact No",';
         head += '"Department",';
         head += '"Email Id",';
         head += '"Participator 2",';
         head += '"Contact No",';
         head += '"Department",';
         head += '"Email Id",';
          head+='\r\n'
          var csvContent = "";
          csvContent=head;
var c=0;
    for(var i in this.registers){
      var row = "";


 if(this.junk){
if(this.registers[i]['event']=='geekjunk'){
       //2nd loop will extract each column and convert it in string comma-seprated
      
        for (var index in this.registers[i]) {
        if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
            row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}

else if(this.trix){
if(this.registers[i]['event']=='geektrix'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
       
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       
            row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}
    else if(this.face){
if(this.registers[i]['event']=='geekface'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
       
        if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
            row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}
      else if(this.adz){
if(this.registers[i]['event']=='geekadz'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            
            
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}  
    else if(this.zorro){
if(this.registers[i]['event']=='geekzorro'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            
            
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}
      else if(this.mesh){
if(this.registers[i]['event']=='geekmesh'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            
            
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}
      else if(this.quiz){
if(this.registers[i]['event']=='geekquiz'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            
            
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}
   else if(this.tango){
if(this.registers[i]['event']=='geektango'){
       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            
            
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }}

  else{
   
      var row = "";

       //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            
            
             if(this.registers[i]['id']==this.registers[i][index])
       {
           c=c+1;
        row+='"'+c+'",';
       }
        else
       row += '"' + this.registers[i][index] + '",';
        }
       
        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }
        
        //add a line break after each row
    }    

  //create column_names here, sep by commas, append them to "csvContent", end with /n
  //create your data rows sep by commas & quoted, end with /n
  var filename = title.replace(/ /g,'')+'.csv'; //gen a filename using the title but getting rid of spaces
  var blob = new Blob([csvContent], { "type": 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) 
  { // IE 10+
    navigator.msSaveBlob(blob, filename);
  } 
  else //create a link and click it
  {
    var link = document.createElement("a");
    if (link.download !== undefined) // feature detection
    { 
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob); 
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
    }
}
