/**
 * POSTCSS MORPHICON
 * A postcss plugin to add special morphable icons done in pure HTML/CSS
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let postcss = require('postcss'),
    util = require('postcss-plugin-utilities');

// export plugin
module.exports = postcss.plugin('postcss-morphicon', options => {
    return css => {
        options = {
            morph: 'none',
            width: '2em',
            height: '2em',
            lineLength: '1em',
            lineWeight: '2px',
            lineColor: 'black',
            lineGap: '4px',
            transition: 'all 0.3s ease-in'
        };
        let icons = ['menu', 'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'caret-left', 'caret-right', 'caret-up', 'caret-down', 'close', 'plus', 'minus'];
        css.walkDecls('morphicon', decl => {
            let parent = decl.parent,
                settings = util.filterObject(postcss.list.comma(decl.value), {
                    icon: icons,
                    width: [util.isSize],
                    height: [util.isSize],
                    lineLength: [util.isSize],
                    lineWeight: [util.isSize],
                    lineColor: [util.isColor],
                    lineGap: [util.isSize],
                    transition: [util.isTransition],
                }, options),
                iconStyles = { 'menu': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { transform: 'translateY(' + util.calc('-1*(x+y)', { x: settings.lineWeight, y: settings.lineGap }) + ')' }, second: { transform: 'none' }, last: { transform: 'translateY(' + util.calc('x+y', { x: settings.lineWeight, y: settings.lineGap }) + ')' } }, 'arrow-right': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('0.0777777*x', settings.lineLength) + ') translateY(' + util.calc('-0.1777777*x', settings.lineLength) + ') rotate(45deg)' }, second: { transform: 'none' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('0.0777777*x', settings.lineLength) + ') translateY(' + util.calc('0.1777777*x', settings.lineLength) + ') rotate(-45deg)' } }, 'arrow-left': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.5777777*x', settings.lineLength) + ') translateY(' + util.calc('-0.1777777*x', settings.lineLength) + ') rotate(-45deg)' }, second: { transform: 'none' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.5777777*x', settings.lineLength) + ') translateY(' + util.calc('0.1777777*x', settings.lineLength) + ') rotate(45deg)' } }, 'arrow-up': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('(-0.5+0.0777777)*x', settings.lineLength) + ') translateY(' + util.calc('-0.3333333*x', settings.lineLength) + ') rotate(-45deg)' }, second: { transform: 'rotate(-90deg)' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.0777777*x', settings.lineLength) + ') translateY(' + util.calc('-0.3333333*x', settings.lineLength) + ') rotate(45deg)' } }, 'arrow-down': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('(-0.5+0.0777777)*x', settings.lineLength) + ') translateY(' + util.calc('0.3333333*x', settings.lineLength) + ') rotate(45deg)' }, second: { transform: 'rotate(-90deg)' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.0777777*x', settings.lineLength) + ') translateY(' + util.calc('0.3333333*x', settings.lineLength) + ') rotate(-45deg)' } }, 'caret-right': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.17777777*x', settings.lineLength) + ') translateY(' + util.calc('-0.1777777*x', settings.lineLength) + ') rotate(45deg)' }, second: { opacity: '0', transform: 'none' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.17777777*x', settings.lineLength) + ') translateY(' + util.calc('0.1777777*x', settings.lineLength) + ') rotate(-45deg)' } }, 'caret-left': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.3333333*x', settings.lineLength) + ') translateY(' + util.calc('-0.1777777*x', settings.lineLength) + ') rotate(-45deg)' }, second: { opacity: '0', transform: 'none' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.3333333*x', settings.lineLength) + ') translateY(' + util.calc('0.1777777*x', settings.lineLength) + ') rotate(45deg)' } }, 'caret-up': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('(-0.5+0.0777777)*x', settings.lineLength) + ') translateY(' + util.calc('-0.0777777*x', settings.lineLength) + ') rotate(-45deg)' }, second: { opacity: '0', transform: 'none' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.0777777*x', settings.lineLength) + ') translateY(' + util.calc('-0.0777777*x', settings.lineLength) + ') rotate(45deg)' } }, 'caret-down': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('(-0.5+0.0777777)*x', settings.lineLength) + ') translateY(' + util.calc('0.0777777*x', settings.lineLength) + ') rotate(45deg)' }, second: { opacity: '0', transform: 'none' }, last: { width: util.calc('0.5*x', settings.lineLength), transform: 'translateX(' + util.calc('-0.0777777*x', settings.lineLength) + ') translateY(' + util.calc('0.0777777*x', settings.lineLength) + ') rotate(-45deg)' } }, 'close': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { transform: 'rotate(45deg)' }, second: { transform: 'none', opacity: '0' }, last: { transform: 'rotate(-45deg)' } }, 'plus': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { transform: 'none' }, second: { transform: 'rotate(-90deg)' }, last: { opacity: '0', transform: 'none' } }, 'minus': { all: { width: settings.lineLength, height: settings.lineWeight, opacity: '1' }, first: { transform: 'none', opacity: '0' }, second: { transform: 'none' }, last: { transform: 'none', opacity: '0' } } },
                allStyles = { display: 'block', position: 'absolute', top: '50%', right: '50%', bottom: 'auto', left: 'auto', width: settings.lineLength, height: settings.lineWeight, margin: util.calc('-x/2', settings.lineWeight) + ' ' + util.calc('-x/2', settings.lineLength) + ' 0 0', opacity: '1', background: settings.lineColor, transition: settings.transition },
                parentStyles = { position: 'relative', display: 'inline-block', 'vertical-align': 'top', width: settings.width, height: settings.height };
            if (settings.icon) { 
                let selector = parent.selector,
                    styles = iconStyles[settings.icon],    
                    parentSelector = null,
                    allSelector = util.eachSelector(selector, '& > span'),
                    firstSelector = util.eachSelector(selector, '& > span:first-child'),
                    secondSelector = util.eachSelector(selector, '& > span:nth-child(2)'),
                    lastSelector = util.eachSelector(selector, '& > span:last-child'),
                    all = null,
                    first = null,
                    second = null,
                    last = null;
                for (let [prop, val] of Object.entries(parentStyles)) { decl.before({ prop: prop, value: val }); }
                all = postcss.rule(); all.selector = allSelector; for (let [prop, val] of Object.entries(Object.assign(allStyles, styles.all))) { all.append({ prop: prop, value: val }); } parent.cloneAfter(all);
                first = postcss.rule(); first.selector = firstSelector; for (let [prop, val] of Object.entries(styles.first)) { first.append({ prop: prop, value: val }); } parent.cloneAfter(first);
                second = postcss.rule(); second.selector = secondSelector; for (let [prop, val] of Object.entries(styles.second)) { second.append({ prop: prop, value: val }); } parent.cloneAfter(second);
                last = postcss.rule(); last.selector = lastSelector; for (let [prop, val] of Object.entries(styles.last)) { last.append({ prop: prop, value: val }); } parent.cloneAfter(last);
            }
            decl.remove();
            if (parent.nodes.length === 0) { parent.remove(); }
        });
    }
});