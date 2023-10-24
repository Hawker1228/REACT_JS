import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
          first_name: "",
          last_name: "",
          isHappy: false
        }
      }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="first_name" onChange={(e) => this.setState({first_name: e.target.value})}></input>
                <input placeholder="last_name" onChange={(e) => this.setState({last_name: e.target.value})}></input>
                <input type="checkbox" id="isHappy" value="yes" onChange={(e) => this.setState({isHappy: e.target.checked})}></input>
                <label htmlFor="isHappy" >Счастлив?</label>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        isHappy: this.state.isHappy,
                }
                if(this.props.user)
                    this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
}

export default AddUser