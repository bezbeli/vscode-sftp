class AppState {
  private _profile: string;
  private _observer: (x: any) => void;

  get profile(): string {
    return this._profile;
  }

  set profile(newProfile: string) {
    this._profile = newProfile;
    this._observer(this.getStateSnapshot());
  }

  getStateSnapshot() {
    return {
      profile: this._profile,
    };
  }

  subscribe(observer) {
    this._observer = observer;
  }
}

export default AppState;
