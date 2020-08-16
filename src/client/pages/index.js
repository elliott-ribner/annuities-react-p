import React, { Component } from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell } from 'react-foundation';
import AnnuityForm from './AnnuityForm';

const styles = {
  list: {
    fontSize: '1.5rem',
    msoFrontWidth: 'bold',
    marginLeft: '4rem'
  },
  heroBackground: {
    backgroundImage: 'url(https://picsum.photos/1200/700/?image=120)',
    backgroundSize: 'cover',
    color: '#fefefe',
    padding: '40px 20px'
  }
};
export default class App extends Component {
  componentDidMount() {
    fetch('/api/getUsername').then(res => res.json());
  }

  render() {
    return (
      <div>
        <div style={styles.heroBackground}>
          <Grid className="display">
            <Cell small={6} large={6}>
              <div className="hero-section-text">
                <h1 className="text-center">Taking Annuity Shopping to the 21st Century</h1>
                <hr />
                <h5>
                  We strive to bring you the most accurate and competitive annuity quotes. Unlike
                  other online annuity businesses we do not require a phone number or email. Simply
                  follow these steps:
                </h5>
                <ol style={styles.list}>
                  <li>Fill out your annuity preferences</li>
                  <li>Compare personalized annuity quotes</li>
                  <li>Choose the best annuity for you</li>
                </ol>
              </div>
            </Cell>
            <Cell small={6} large={6}>
              <AnnuityForm />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
