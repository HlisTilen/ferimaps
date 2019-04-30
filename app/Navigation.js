import { createStackNavigator, createAppContainer } from 'react-navigation';

import Prostori from './components/Prostori';
import DodajProstor from './components/DodajProstor';
import Zaposleni from './components/Zaposleni';
import DodajZaposlen from './components/DodajZaposlen';
/*import Student from './screens/Student';
import Professor from './screens/Professor';
import Classrom from './screens/Classroom';
import Schedule from './screens/Schedule';
import Splash from './screens/Splash';*/

//import { t } from './locales/i18n';

const RootStack = createStackNavigator({

    Prostori: {
        screen: Prostori, navigationOptions: {
            title: 'Prostori',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        },
    },
    DodajProstor: {
        screen: DodajProstor, navigationOptions: {
            title: 'Dodaj prostor',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        },
    },
    Zaposleni: {
        screen: Zaposleni, navigationOptions: {
            title: 'Zaposleni',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        }
    },
    DodajZaposlen: {
        screen: DodajZaposlen, navigationOptions: {
            title: 'Dodaj zaposlen',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        },
    },/*
    Professor: {
        screen: Professor, navigationOptions: {
            title: `${t('Navigation.professor')}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        }
    },
    Classroom: {
        screen: Classrom, navigationOptions: {
            title: `${t('Navigation.classroom')}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        }
    },
    Schedule: {
        screen: Schedule, navigationOptions: {
            title: `${t('Navigation.schedule')}`,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#036384'
            }
        }
    },*/
});

const Root = createAppContainer(RootStack);

export default Root;




