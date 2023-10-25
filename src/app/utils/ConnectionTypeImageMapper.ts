export class ConnectionTypeImageMapper {
  private static imageMap: { [key: string]: string } = {
    MongoDB: 'assets/images/connection-types/mongodb.png',
    MySQL: 'assets/images/connection-types/mysql.png',
    Salesforce: 'assets/images/connection-types/salesforce.png',
    PostgreSQL: 'assets/images/connection-types/postgresql.png',
    // Add more mappings as needed
  };

  static getImageRoute(connectionTypeName: string): string {
    const imageRoute = this.imageMap[connectionTypeName];
    if (imageRoute) {
      return imageRoute;
    } else {
      return 'assets/images/connection-types/default.png';
    }
  }
}
