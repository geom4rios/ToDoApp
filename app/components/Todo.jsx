var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;

        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed) {
                message = 'Completed';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return (
            <div >
                <input type="checkbox"  defaultChecked={completed} onClick={() => {
                    this.props.onToggle(id);
                }} />
                <p>{text} </p>
                <p> {renderDate()} </p>
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