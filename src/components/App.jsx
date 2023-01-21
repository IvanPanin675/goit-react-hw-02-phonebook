import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
    const name = e.target.elements.name.value;
    const id = nanoid();
    const contact = { id, name };
    this.setState(({ contacts }) => ({ contacts: [ ...contacts, contact] }));
  }

  render() {
    return (
      <>
      <form onSubmit={this.onHandleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type='submit'>Add contact</button>
        </form>
        <div>
          <p>Contacts</p>
          <ul>
            {this.state.contacts.map(({ id, name }) => { return <li key={id}>{ name}</li>})}
          </ul>
        </div>
      </>
    );
  }
}
