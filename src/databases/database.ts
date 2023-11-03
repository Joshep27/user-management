export abstract class Database<C> {
	protected type: string = "";
	protected username: string = "";
	protected password: string = "";
	protected host: string = "";
	protected port: string = "";
	protected dbName: string = "";

	constructor() {
		this.type = "";
		this.username = "";
		this.password = "";
		this.port = "";
		this.host = "";
		this.dbName = "";
	}

	public abstract connect(): C;

	public getUri() {
		if (this.username && this.password) {
			return `${this.type}://${this.username}:${this.password}@${this.host}:${this.port}/${this.dbName}`;
		}
        return `${this.type}://${this.host}:${this.port}/${this.dbName}`;

	}
}
