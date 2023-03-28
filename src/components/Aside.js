import { CardContact } from "./CardContact"

import {
    Input, Row
} from 'reactstrap';

export function Aside() {

    return (
        // <!-- second section start  -->
        // <!-- naming second column as aside --> */}
        <aside className="col-12 col-md-6 col-lg-6">
            <Input
                className="mb-1 mt-2"
                type='text'
                placeholder="Filter Contacts..."
            />

            {/* cards of users */}
            <Row>
                <CardContact />
            </Row>

        </aside>
        // {/* <!-- second section end  --> */}
    )
}