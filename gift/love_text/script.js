(function () {
  var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

  MESSAGES = [];

  MESSAGES.push({
    delay: 0,
    text: "Incoming transmission..."
  });

  MESSAGES.push({
    delay: 1200,
    text: "娇，以这种赛博朋克的方式与你对话，是否满足了你的愿望呢？"
  });

  MESSAGES.push({
    delay: 2200,
    text: "没有什么是永恒的，除了爱与孤独。但我记得你所有的期许，我只想尽我所能地让你幸福。"
  });

  MESSAGES.push({
    delay: 3600,
    text: "相隔两地，无以言表。你喜欢花的生机，又讨厌花的凋零，所以我准备了你不会讨厌的花，想必你现在也一定是捧着这束花看着这行字的吧。"
  });

  MESSAGES.push({
    delay: 5450,
    text: "然而刚刚走出病房的你，还没来得及体会一下节日气氛，就又要踏入研究生考试的考场了。不要灰心，你是我的骄傲，你一直都很努力，我相信你一定会成功的。"
  });

  MESSAGES.push({
    delay: 10250,
    text: "我的爱人，祝你在这个圣诞节考试顺利❤💕❤️"
  });

  $container = $("#container");

  $message = $("#message");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function (element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
    // Default properties.
    defaults = {
      probability: 0.2,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 52,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    // Convert the element to a jQuery object and build the settings object.
    $element = $(element);
    settings = $.extend(defaults, options);
    // Convenience methods.
    shuffle = function () {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function (text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    // Glitch values.
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function () {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    // Ghost values.
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function () {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    // Text values.
    textCharacters = text.split('');
    textLength = textCharacters.length;
    // Order and output arrays.
    order = (function () {
      var results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--) { results.push(j); }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
    // Build the output array.
    for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    // Animate the text.
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function () {
        var index, k, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function () {
        return $element.html(text);
      }
    };
    // Animate the text.
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function () {
    var data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
    }
  };

  initialise = function () {
    var index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQTs7RUFBQSxRQUFBLEdBQVc7O0VBQ1gsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxDQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYztJQUFBLEtBQUEsRUFBTSxJQUFOO0lBQVksSUFBQSxFQUFLO0VBQWpCLENBQWQ7O0VBRUEsVUFBQSxHQUFhLENBQUEsQ0FBRSxZQUFGOztFQUNiLFFBQUEsR0FBVyxDQUFBLENBQUUsVUFBRjs7RUFDWCxRQUFBLEdBQVcsQ0FBQSxDQUFFLFVBQUY7O0VBQ1gsVUFBQSxHQUFhOztFQUViLFFBQUEsR0FBVyxRQUFBLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsT0FBaEIsQ0FBQTtBQUVYLFFBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEsZUFBQSxFQUFBLGdCQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSxpQkFBQSxFQUFBLFVBQUEsRUFBQSxRQUFBLEVBQUEsQ0FBQSxFQUFBLENB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XG5NRVNTQUdFUy5wdXNoIGRlbGF5OjAsICAgIHRleHQ6XCJJbmNvbWluZyB0cmFuc21pc3Npb24uLi5cIlxuTUVTU0FHRVMucHVzaCBkZWxheToxMjAwLCB0ZXh0OlwiWW91IGRvbid0IHRhbGsgdG8gYW55Ym9keS5cIlxuTUVTU0FHRVMucHVzaCBkZWxheToyMjAwLCB0ZXh0OlwiWW91IGRvbid0IGludGVyYWN0IHdpdGggYW55Ym9keS5cIlxuTUVTU0FHRVMucHVzaCBkZWxheTozNjAwLCB0ZXh0OlwiWW91ciB3aG9sZSBzZW5zZSBvZiByZWFsaXR5IGlzLCBwcmV0dHkgd2FycGVkLi4uXCJcbk1FU1NBR0VTLnB1c2ggZGVsYXk6NTIwMCwgdGV4dDpcIkRvZXMgaXQgYm90aGVyIHlvdSB0aGF0IHdlJ3JlIG5vdCByZWFsP1wiXG5cbiRjb250YWluZXIgPSAkKFwiI2NvbnRhaW5lclwiKVxuJG1lc3NhZ2UgPSAkKFwiI21lc3NhZ2VcIilcbiRhbmltYXRlID0gJChcIiNhbmltYXRlXCIpXG4kcGFyYWdyYXBoID0gbnVsbFxuXG5zY3JhbWJsZSA9IChlbGVtZW50LCB0ZXh0LCBvcHRpb25zKSAtPlxuXG4gICMgRGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBkZWZhdWx0cyA9XG4gICAgcHJvYmFiaWxpdHk6IDAuMlxuICAgIGdsaXRjaGVzOiAnLXwvXFxcXCdcbiAgICBibGFuazogJydcbiAgICBkdXJhdGlvbjogdGV4dC5sZW5ndGggKiA0MFxuICAgIGVhc2U6ICdlYXNlSW5PdXRRdWFkJ1xuICAgIGRlbGF5OiAwLjBcblxuICAjIENvbnZlcnQgdGhlIGVsZW1lbnQgdG8gYSBqUXVlcnkgb2JqZWN0IGFuZCBidWlsZCB0aGUgc2V0dGluZ3Mgb2JqZWN0LlxuICAkZWxlbWVudCA9ICQoZWxlbWVudClcbiAgc2V0dGluZ3MgPSAkLmV4dGVuZCBkZWZhdWx0cywgb3B0aW9uc1xuXG4gICMgQ29udmVuaWVuY2UgbWV0aG9kcy5cbiAgc2h1ZmZsZSA9ICgpIC0+IGlmIE1hdGgucmFuZG9tKCkgPCAwLjUgdGhlbiAxIGVsc2UgLTFcbiAgd3JhcCA9ICh0ZXh0LCBjbGFzc2VzKSAtPiBcIlwiXCI8c3BhbiBjbGFzcz1cIiN7Y2xhc3Nlc31cIj4je3RleHR9PC9zcGFuPlwiXCJcIlxuXG4gICMgR2xpdGNoIHZhbHVlcy5cbiAgZ2xpdGNoVGV4dCA9IHNldHRpbmdzLmdsaXRjaGVzXG4gIGdsaXRjaENoYXJhY3RlcnMgPSBnbGl0Y2hUZXh0LnNwbGl0ICcnXG4gIGdsaXRjaExlbmd0aCA9IGdsaXRjaENoYXJhY3RlcnMubGVuZ3RoXG4gIGdsaXRjaFByb2JhYmlsaXR5ID0gc2V0dGluZ3MucHJvYmFiaWxpdHlcbiAgZ2xpdGNoZXMgPSAoKHdyYXAgbGV0dGVyLCAnZ2xpdGNoJykgZm9yIGxldHRlciBpbiBnbGl0Y2hDaGFyYWN0ZXJzKVxuXG4gICMgR2hvc3QgdmFsdWVzLlxuICBnaG9zdFRleHQgPSAkZWxlbWVudC50ZXh0KClcbiAgZ2hvc3RDaGFyYWN0ZXJzID0gZ2hvc3RUZXh0LnNwbGl0ICcnXG4gIGdob3N0TGVuZ3RoID0gZ2hvc3RDaGFyYWN0ZXJzLmxlbmd0aFxuICBnaG9zdHMgPSAoKHdyYXAgbGV0dGVyLCAnZ2hvc3QnKSBmb3IgbGV0dGVyIGluIGdob3N0Q2hhcmFjdGVycylcblxuICAjIFRleHQgdmFsdWVzLlxuICB0ZXh0Q2hhcmFjdGVycyA9IHRleHQuc3BsaXQgJydcbiAgdGV4dExlbmd0aCA9IHRleHRDaGFyYWN0ZXJzLmxlbmd0aFxuXG4gICMgT3JkZXIgYW5kIG91dHB1dCBhcnJheXMuXG4gIG9yZGVyID0gWzAuLi50ZXh0TGVuZ3RoXS5zb3J0IEBzaHVmZmxlXG4gIG91dHB1dCA9IFtdXG5cbiAgIyBCdWlsZCB0aGUgb3V0cHV0IGFycmF5LlxuICBmb3IgaSBpbiBbMC4uLnRleHRMZW5ndGhdXG4gICAgZ2xpdGNoSW5kZXggPSBNYXRoLmZsb29yIE1hdGgucmFuZG9tKCkgKiAoZ2xpdGNoTGVuZ3RoIC0gMSlcbiAgICBnbGl0Y2hDaGFyYWN0ZXIgPSBnbGl0Y2hlc1tnbGl0Y2hJbmRleF1cbiAgICBnaG9zdENoYXJhY3RlciA9IGdob3N0c1tpXSBvciBzZXR0aW5ncy5ibGFua1xuICAgIGFkZEdsaXRjaCA9IE1hdGgucmFuZG9tKCkgPCBnbGl0Y2hQcm9iYWJpbGl0eVxuICAgIGNoYXJhY3RlciA9IGlmIGFkZEdsaXRjaCB0aGVuIGdsaXRjaENoYXJhY3RlciBlbHNlIGdob3N0Q2hhcmFjdGVyXG4gICAgb3V0cHV0LnB1c2ggY2hhcmFjdGVyXG5cbiAgIyBBbmltYXRlIHRoZSB0ZXh0LlxuICBvYmplY3QgPSB2YWx1ZTowXG4gIHRhcmdldCA9IHZhbHVlOjFcbiAgcGFyYW1ldGVycyA9XG4gICAgZHVyYXRpb246c2V0dGluZ3MuZHVyYXRpb25cbiAgICBlYXNlOnNldHRpbmdzLmVhc2VcbiAgICBzdGVwOiAtPlxuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yIG9iamVjdC52YWx1ZSAqICh0ZXh0TGVuZ3RoIC0gMSlcbiAgICAgIGZvciBpIGluIFswLi5wcm9ncmVzc11cbiAgICAgICAgaW5kZXggPSBvcmRlcltpXVxuICAgICAgICBvdXRwdXRbaW5kZXhdID0gdGV4dENoYXJhY3RlcnNbaW5kZXhdXG4gICAgICAkZWxlbWVudC5odG1sIG91dHB1dC5qb2luICcnXG4gICAgY29tcGxldGU6IC0+XG4gICAgICAkZWxlbWVudC5odG1sIHRleHRcblxuICAjIEFuaW1hdGUgdGhlIHRleHQuXG4gICQob2JqZWN0KS5kZWxheShzZXR0aW5ncy5kZWxheSkuYW5pbWF0ZSB0YXJnZXQsIHBhcmFtZXRlcnNcblxuXG5cbmFuaW1hdGUgPSAoKSAtPlxuICBmb3IgZGF0YSwgaW5kZXggaW4gTUVTU0FHRVNcbiAgICBlbGVtZW50ID0gJHBhcmFncmFwaC5nZXQgaW5kZXhcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9ICcnXG4gICAgb3B0aW9ucyA9IGRlbGF5OiBkYXRhLmRlbGF5XG4gICAgc2NyYW1ibGUgZWxlbWVudCwgZGF0YS50ZXh0LCBvcHRpb25zXG4gIHJldHVyblxuXG5pbml0aWFsaXNlID0gKCkgLT5cbiAgJGFuaW1hdGUuY2xpY2sgYW5pbWF0ZVxuICAkbWVzc2FnZS5hcHBlbmQgXCI8cD5cIiBmb3IgdGV4dCwgaW5kZXggaW4gTUVTU0FHRVNcbiAgJHBhcmFncmFwaCA9ICRjb250YWluZXIuZmluZCBcInBcIlxuICBhbmltYXRlKClcbiAgcmV0dXJuXG5cbmluaXRpYWxpc2UoKVxuIl19
//# sourceURL=coffeescript