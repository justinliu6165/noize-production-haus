// Inspiration: https://codepen.io/bionik/pen/dzBweB?editors=1010

class WordScrambler {
    constructor(el) {
        this.el = el;
        this.codeletters = "忘いイじ料中エト代専宮ヌホフ訃群サニ会管フソホ雄朝ウヌ申寄流ゃ砲暴くこり門覧17謙みイだ紙談わゅフ月刈拒禎阻ば。交シトモ省学ほ最将ニエルハ勝79早でた地属転ヌキニ見隠ろ康8院ざ左方がゅち一掲ざほちさ正主イヘホ階禁ッよび限必テ内山幅もぽ。聞かぼてへ読感26西ニ速質ンるぴや法灯ぱ年諭よじべい老約コ郎子ろいべを術型ヘモ断速立竹チ法6導権ばぎおト災南コマ型品園返奇ひおじ";
        this.current_length = 0;
        this.fadeBuffer = false;
        this.messages = el.innerText;
        this.generateRandomString = this.generateRandomString.bind(this);
        this.animateIn = this.animateIn.bind(this);
        this.animateFadeBuffer = this.animateFadeBuffer.bind(this);

        setTimeout(this.animateIn, 100);
    }
    
    generateRandomString = (length) => {
      var random_text = '';

      while(random_text.length < length){
        random_text += this.codeletters.charAt(Math.floor(Math.random()*this.codeletters.length));
      } 
      
      return random_text;
    };
    
    animateIn = () => {
      if(this.current_length < this.messages.length){
        this.current_length = this.current_length + 2;

        if(this.current_length > this.messages.length) {
          this.current_length = this.messages.length;
        }
        
        var message = this.generateRandomString(this.current_length);
        this.el.innerHTML = message;
        
        setTimeout(this.animateIn, 20);
      } else { 
        setTimeout(this.animateFadeBuffer, 20);
      }
    };
    
    animateFadeBuffer = () => {
      if(this.fadeBuffer === false){
        this.fadeBuffer = [];
        for(let i = 0; i < this.messages.length; i++){
          this.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: this.messages.charAt(i)});
        }
      }
      var ongoing = false;
      var message = ''; 
      
      for(let i = 0; i < this.fadeBuffer.length; i++){
        var fader = this.fadeBuffer[i];
        if(fader.c > 0){
          ongoing = true;
          fader.c--;
          message += this.codeletters.charAt(Math.floor(Math.random() * this.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      
      this.el.innerHTML = message;
      
      if(ongoing === true){
        setTimeout(this.animateFadeBuffer, 50);
      }
    };
}
  
export default WordScrambler;