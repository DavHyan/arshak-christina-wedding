'use client';

import { FC, SetStateAction, useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import { getGuests } from 'api/invite-api';
import Loader from 'Loader/Loader';
import './Admin.scss';

const Admin: FC = () => {
  const [guests, setGuests] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getGuests()
      .then((res: { json: () => any; }) => res.json())
      .then((data: SetStateAction<any[]>) => {
        setGuests(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader message="Խնդրում ենք սպասել․․․" />;

  return (
    <div>
      <div className="admin_title_div">
        <h3>Արշակ և Քրիստինե հյուրերի ցուցակը</h3>
        <h4 className="guests_count">
          Արշակ և Քրիստինե հյուրերի թիվը {guests?.length} է
        </h4>
      </div>
      <div className="table">
        <div className="tr">
          <div className="admin_param" id="guest_id">
            No.
          </div>

          <div className="guestParam">
            <div className="guestRow">
              <div className="admin_param" id="guest_name">
                Անուն Ազգանուն
              </div>
              <div className="admin_param" id="guest_phone">
                Հեռախոսահամար
              </div>
            </div>

            <div className="guestRow">
              <div className="admin_param" id="guest_count">
                Քանակ
              </div>
              <div className="admin_param" id="guest_isVisting">
                Ներկա Կգտնվի՞
              </div>
            </div>
            <div className="guestRow">
              <div className="admin_param" id="guest_side">
                Ու՞մ կողմից
              </div>
            </div>
          </div>
        </div>
        {guests.length > 0 &&
          guests.map((item: any, index: number) => {
            return (
              <div key={item._id} className="tr">
                <div id="guest_id" className="td">
                  <p className="td_p">{index + 1}</p>
                </div>

                <div className="guestParam">
                  <div className="guestRow">
                    <div id="guest_name" className="td">
                      <p className="td_p">{item?.name || ''}</p>
                    </div>
                    <div id="guest_phone" className="td">
                      <a href={`tel:${item?.phone}`} className="call_to_link">
                        <p className="td_p">{item?.phone || ''}</p>
                      </a>
                    </div>
                  </div>

                  <div className="guestRow">
                    <div id="guest_count" className="td">
                      <p className="td_p">{item.guestsCount}</p>
                    </div>
                    <div id="guest_isVisting" className="td">
                      <p className="td_p">
                        {item.isVisiting === 'true' ? 'Այո' : 'Ոչ'}
                      </p>
                    </div>
                  </div>
                  <div className="guestRow">
                    <div id="guest_bride_groom" className="td">
                      <p className="td_p">{item.bride_groom}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
