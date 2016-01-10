var GUI;
      var menu;
      var exitUI;
      function dip2px(dips){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
      }
      function newLevel(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.runnable({ run: function(){
      try{
      var layout = new LinearLayout(ctx);
      layout.setOrientation(1);

      var menuBtn = new android.widget.Button(ctx);
      menuBtn.setText('>[SPAM]<')
      menuBtn.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      mainMenu();
      exit();
      }
      }));
      layout.addView(menuBtn);
