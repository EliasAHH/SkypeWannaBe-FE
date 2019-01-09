import React,{Fragment, Component} from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT, ICE, HEADERS } from '../constants';

import ConversationsCont from '../containers/ConversationsCont'
import MessagesArea from './messages/MessagesArea';

import Cable from './Cable';
import UserContainer from '../containers/UserContainer'
import VideoContainer from '../containers/VideoContainer'
