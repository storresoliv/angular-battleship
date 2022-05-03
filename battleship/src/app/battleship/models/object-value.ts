export class ObjectValue {
  public toString(): string {
    let result = '';
    try {
      result = JSON.stringify(this);
    } catch (error) {
      this.throwError('error to try transform object to string');
    }

    return result;
  }

  public throwError(message: string): Error {
    throw new Error(`[${this.constructor.name}]: ${message}`);
  }
}
