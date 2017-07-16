var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed} = this.props;

        return (
            <div >
                <input type="checkbox"  defaultChecked={completed} onClick={() => {
                    this.props.onToggle(id);
                }} />
                {text}
            </div>
        )
    }
});

module.exports = Todo;


/*

 onClick={() => {
 this.props.onToggle(id);
 }}
 */