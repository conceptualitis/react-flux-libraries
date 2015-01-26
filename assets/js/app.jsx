var React = require('react');
var _ = require('lodash');
var libraries = require('./libraries');
var traits = require('./traits');

var App = React.createClass({
    getInitialState: function () {
        return {
            traits: traits,
            activeTraits: []
        };
    },

    setTrait: function (e) {
        var change = _.extend({}, this.state.traits);
        change[e.target.value].active = e.target.checked;

        this.setState({
            traits: change,
            activeTraits: (e.target.checked) ?
                this.state.activeTraits.concat([e.target.value]) :
                _.without(this.state.activeTraits, e.target.value)
        });
    },

    renderTraits: function () {
        return _.map(traits, function (trait) {
            return (
                <label>
                    <input value={ trait.value } type='checkbox' checked={ trait.active } onChange={ this.setTrait } />
                    { String.fromCharCode(160) + trait.name }  { /* &nbsp; */ }
                </label>
            );
        }, this);
    },

    renderLibraries: function () {
        return _.chain(libraries)
            .filter(function (library) {
                return _.all(this.state.activeTraits, function (trait) {
                    return _.contains(library.traits, trait);
                }, this);
            }, this).map(function (library, i) {
                return (
                    <li key={ i } className='padded'>
                        <h2>{ library.name }</h2>
                        <p>{ library.description }</p>
                        <a href={ library.repo }>Repo</a>
                        { String.fromCharCode(160) } { /* &nbsp; */ }
                        { (library.site) ? <a href={ library.site }>Project website</a> : null }
                    </li>
                );
            });
    },

    render: function () {
        return (
            <div className='content'>
                <div className='sidebar'>
                    <p>
                        I want
                        { String.fromCharCode(8230) } { /* &hellip; */ }
                    </p>
                    { this.renderTraits() }
                </div>
                <ol className='libraries'>
                    { this.renderLibraries() }
                </ol>
            </div>
        );
    }
});

module.exports = App;
