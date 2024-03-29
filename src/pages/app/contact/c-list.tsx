import { useEffect, useState, Fragment, ReactElement } from 'react';

// material-ui
import { Button, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';

// third-party
import { isEmpty } from 'lodash';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import UserDetails from 'components/application/contact/UserDetails';
import UserEdit from 'components/application/contact/UserEdit';
import ContactList from 'ui-component/cards/ContactList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
const User1 = '/assets/images/users/avatar-1.png';
import { KeyedObject } from 'types';
import { UserProfile } from 'types/user-profile';
import { useDispatch, useSelector } from 'store';
import { getContacts, modifyContact } from 'store/slices/contact';

// assets
import { IconSearch } from '@tabler/icons';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// ==============================|| CONTACT LIST ||============================== //

const CardListPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserProfile>({});
  const [data, setData] = useState<KeyedObject>({});

  // get all users details
  const { contacts } = useSelector((state) => state.contact);
  const convertData = (userData: UserProfile[]) =>
    userData.reduce((a: KeyedObject, curr) => {
      const firstLatter = curr.name![0].toUpperCase();
      if (Object.prototype.hasOwnProperty.call(a, firstLatter)) {
        a[firstLatter].push(curr);
      } else {
        a[firstLatter] = [curr];
      }
      return a;
    }, {});
  useEffect(() => {
    setData(convertData(contacts));
    if (!isEmpty(user)) {
      const idx = contacts.findIndex((item: UserProfile) => item.id === user.id);
      if (idx > -1) setUser(contacts[idx]);
    }
  }, [contacts, user]);

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // edit selected user and modify users data
  const modifyUser = async (u: UserProfile) => {
    await dispatch(modifyContact(u));
  };

  // handle new user insert action
  const [userDetails, setUserDetails] = useState(false);
  const [userEdit, setUserEdit] = useState(false);
  const handleOnAdd = () => {
    setUser({
      name: '',
      company: '',
      role: '',
      work_email: '',
      personal_email: '',
      work_phone: '',
      personal_phone: '',
      location: 'USA',
      image: User1,
      status: 'I am online',
      lastMessage: '2h ago',
      birthdayText: ''
    });
    setUserDetails(false);
    setUserEdit(true);
  };

  return (
    <Page title="Contact List">
      <MainCard title="Contact List">
        <Grid container spacing={gridSpacing}>
          <Grid item xs zeroMinWidth sx={{ display: userDetails || userEdit ? { xs: 'none', md: 'block' } : 'block' }}>
            <Grid container alignItems="center" spacing={gridSpacing}>
              <Grid item xs zeroMinWidth>
                <OutlinedInput
                  id="input-search-card-style1"
                  placeholder="Search Contact"
                  fullWidth
                  startAdornment={
                    <InputAdornment position="start">
                      <IconSearch stroke={1.5} size="16px" />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  sx={{ px: 2.75, py: 1.5 }}
                  onClick={handleOnAdd}
                >
                  Add
                </Button>
              </Grid>

              {Object.keys(data).map((key, index) => (
                <Fragment key={index}>
                  <Grid item xs={12}>
                    <Typography variant="h4" color="primary" sx={{ fontSize: '1rem' }}>
                      {key.toUpperCase()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="row" spacing={0}>
                      {data[key].map((userRow: UserProfile, i: number) => (
                        <Grid item xs={12} key={i}>
                          <ContactList
                            avatar={userRow.avatar}
                            name={userRow.name}
                            role={userRow.role}
                            email={userRow.work_email}
                            contact={userRow.phone}
                            location={userRow.location}
                            onActive={() => {
                              setUser(userRow);
                              setUserDetails(true);
                              setUserEdit(false);
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Grid>
          {userDetails && (
            <Grid item sx={{ width: 342, margin: { xs: '0 auto', md: 'initial' } }}>
              <UserDetails
                user={user}
                onEditClick={() => {
                  setUserDetails(false);
                  setUserEdit(true);
                }}
                onClose={() => {
                  setUserDetails(false);
                  setUserEdit(false);
                }}
              />
            </Grid>
          )}

          {userEdit && (
            <Grid item sx={{ width: 342, margin: { xs: '0 auto', md: 'initial' } }}>
              <UserEdit
                user={user}
                onSave={(u) => {
                  if (u.id) setUserDetails(true);
                  setUserEdit(false);
                  modifyUser(u);
                }}
                onCancel={(u) => {
                  if (u.id) setUserDetails(true);
                  setUserEdit(false);
                }}
              />
            </Grid>
          )}
        </Grid>
      </MainCard>
    </Page>
  );
};

CardListPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CardListPage;
