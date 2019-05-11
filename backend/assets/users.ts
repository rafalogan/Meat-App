export class User {

  constructor(
    public email: string,
    public name: string,
    private password: string) {}

  matches(another: User): boolean {
      return another !== undefined && another.email === this.email && another.password === this.password;
    }
}


export const users: {[key: string]: User} = {
  'juliana@ju.com': new User('juliana@ju.com', 'Juliana Martins', 'juliana23'),
  'amanda@mandi.com': new User('amanda@mandi.com', 'Amanda', 'amanda21'),
  'root@root.com': new User('root@root.com', 'root', 'root@100')
};
