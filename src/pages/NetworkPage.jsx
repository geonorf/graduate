import { useState } from 'react';

function Network({ props }){
    const [ipAddress, setIpAddress] = useState('');
    const [ipGW,      setIpGW]      = useState('');
    const [mask,      setMask]      = useState('');
    const [ipDNS1,    setIpDNS1]    = useState('');
    const [ipDNS2,    setIpDNS2]    = useState('');
    const [error,     setError]     = useState({ipaddr: '',
                                                gw:     '',
                                                mask:   '',
                                                dns1:   '',
                                                dns2:   ''
    });
    
    const checkErr = (errObj) => {
        let retVal = false;
        
        Object.values(errObj).forEach(val => {
            if (val !== '') retVal = true;
        });

        return retVal;
    };

    const prepareData = () => {
        let data = {ipaddr: '',
                    gw:     '',
                    mask:   '',
                    dns1:   '',
                    dns2:   ''};
        
        data.ipaddr = ipAddress;
        data.gw     = ipGW;
        data.mask   = mask;
        data.dns1   = ipDNS1;
        data.dns2   = ipDNS2;

        // console.log(data);

        props.set_parameters(data);
    };

    const validateIpAddress = (value) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(value)) {
        setError(pErr => ({...pErr, ipaddr: ''}));
        } else {
        setError(pErr => ({...pErr, ipaddr: 'errIP'}));
        }
    };
    
    const validateIpGW = (value) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(value)) {
        setError(pErr => ({...pErr, gw: ''}));
        } else {
        setError(pErr => ({...pErr, gw: 'errGW'}));
        }
    };

    const validateMask = (value) => {
        const regex = /^(255)\.(0|128|192|224|240|248|252|254|255)\.(0|128|192|224|240|248|252|254|255)\.(0|128|192|224|240|248|252|254|255)/gm;
        if (regex.test(value)) {
        setError(pErr => ({...pErr, mask: ''}));
        } else {
        setError(pErr => ({...pErr, mask: 'errMask'}));
        }
    };

    const validateIpDNS1 = (value) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(value)) {
        setError(pErr => ({...pErr, dns1: ''}));
        } else {
        setError(pErr => ({...pErr, dns1: 'errDNS1'}));
        }
    };
    
    const validateIpDNS2 = (value) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(value)) {
        setError(pErr => ({...pErr, dns2: ''}));
        } else {
        setError(pErr => ({...pErr, dns2: 'DNS2'}));
        }
    };

    const handleChangeIP = (e) => {
        const value = e.target.value;
        setIpAddress(value);
        validateIpAddress(value);
    };

    const handleChangeGW = (e) => {
        const value = e.target.value;
        setIpGW(value);
        validateIpGW(value);
    };

    const handleChangeMask = (e) => {
        const value = e.target.value;
        setMask(value);
        validateMask(value);
    };
    
    const handleChangeIpDNS1 = (e) => {
        const value = e.target.value;
        setIpDNS1(value);
        validateIpDNS1(value);
    };
    
    const handleChangeIpDNS2 = (e) => {
        const value = e.target.value;
        setIpDNS2(value);
        validateIpDNS2(value);
    };

    return(
        <div>
            <h4>NETWORK</h4>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">IP</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                value={ipAddress} onChange={handleChangeIP} style={{ borderColor: error.ipaddr ? 'red' : 'lightgray' }}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Gateway</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                value={ipGW} onChange={handleChangeGW} style={{ borderColor: error.gw ? 'red' : 'lightgray' }}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Mask</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                value={mask} onChange={handleChangeMask} style={{ borderColor: error.mask ? 'red' : 'lightgray' }}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">DNS1</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                value={ipDNS1} onChange={handleChangeIpDNS1} style={{ borderColor: error.dns1 ? 'red' : 'lightgray' }}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">DNS2</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                value={ipDNS2} onChange={handleChangeIpDNS2} style={{ borderColor: error.dns2 ? 'red' : 'lightgray' }}/>
            </div>
            <button className="btn btn-primary" disabled={ checkErr(error) } onClick={ () => { prepareData() } } >Save</button>
        </div>
    );
}

export default Network;