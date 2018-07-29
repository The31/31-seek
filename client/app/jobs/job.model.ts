export class Job {
  public company: String;
  public jobTitle: String;
  public compensation: String;
  public appliedDate: Date;
  public phoneScreenDate: Date;
  public onSiteDate: Date;
  public offerDate: Date;
  public result: String;
  public obstacles: String;
  public mainContact: String;
  public contactPhone: String;
  public contactEmail: String;

  constructor(company: String, jobTitle: String, compensation: String, 
    appliedDate: Date, phoneScreenDate: Date, onSiteDate: Date,
    offerDate: Date, result: String, obstacles: String, 
    mainContact: String, contactPhone: String, contactEmail: String){

      this.company = company;
      this.jobTitle = jobTitle;
      this.compensation = compensation;
      this.appliedDate = appliedDate;
      this.phoneScreenDate = phoneScreenDate;
      this.onSiteDate = onSiteDate;
      this.offerDate = offerDate;
      this.result = result;
      this.obstacles = obstacles;
      this.mainContact = mainContact;
      this.contactPhone = contactPhone;
      this.contactEmail = contactEmail;
      
    }
}