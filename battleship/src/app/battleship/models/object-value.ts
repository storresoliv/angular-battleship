export class ObjectValue {
  public toString(): string {
    let result = '';
    try {
      result = JSON.stringify(this);
    } catch (error) {
      console.error('error to try transform object to string');
    }

    return result;
  }
}
