export class StaffMember {
  constructor(
    public id: string,
    public username: string,
    public passwordHash: string,
    public privLevel: number
    ) {}
}
