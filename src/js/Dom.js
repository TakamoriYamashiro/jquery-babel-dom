export class Dom{

  static win;
  static doc;
  static body;
  static height;
  static width;

  static type;
  static TYPE_PC = 'type_pc';
  static TYPE_TABLET = 'type_tablet';
  static TYPE_SP = 'type_sp';
  static TYPE_PC_MIN = 1280;
  static TYPE_TABLET_MIN = 765;

  static observer;
  static EVENT_CHANGE_DEVICE_TYPE = 'change_device_type';
  static EVENT_RESIZE_WINDOW = 'resize_window';

  static init(){
    this.win = $(window);
    this.doc = $(document);
    this.body = $('html,body');
    this.width = this.win.width();
    this.height = this.win.height();
    this.type = this.getType();
    this.observer = $({});

    this.win.resize((e)=>{
      this.width = this.win.width();
      let type = Dom.getType();
      if (type !== this.type){
        this.type = type;
        this.observer.trigger(this.EVENT_CHANGE_DEVICE_TYPE,this.type);
      }
      this.observer.trigger(this.EVENT_RESIZE_WINDOW,this.width);
    }).trigger('resize');
    
  }

  static getType(){
    if (this.width > this.TYPE_PC_MIN) {
      return Dom.TYPE_PC;
    }else if (this.width > this.TYPE_TABLET_MIN){
      return Dom.TYPE_TABLET;
    }else{
      return Dom.TYPE_SP;
    }
  }

  static on(eventtype){
    this.observer.on.apply(this.observer,arguments);
  }
  static off(eventtype){
    this.observer.off.apply(eventtype,arguments);
  }
  static trigger(eventtype){
    this.observer.trigger(eventtype,arguments);
  }

}
Dom.init();