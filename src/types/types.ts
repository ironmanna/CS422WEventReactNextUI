export class SearchType {
  constructor(
    public stringSearch: string,
    public citySearch: string,
    public startDateSearch: string,
    public endDateSearch: string,
    public selectedValue: string,
    public dateValid: boolean
  ) {}
}

export class SearchTypeForDetails {
  constructor(
    public stringSearch: string,
    public citySearch: string,
    public startDateSearch: string,
    public endDateSearch: string,
    public selectedValue: string,
    public fromSearch: boolean,
    public dateValid: boolean
  ) {}
}
